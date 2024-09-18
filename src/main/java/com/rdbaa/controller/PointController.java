package com.rdbaa.controller;

import com.rdbaa.model.Day_of_week;
import com.rdbaa.model.PointForClient;
import com.rdbaa.model.PointFromClient;
import com.rdbaa.model.data.Point;
import com.rdbaa.model.data.User;
import com.rdbaa.repositories.PointRepository;
import com.rdbaa.repositories.UserRepository;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@URL
public class PointController {
    private final PointRepository pointRepository;
    private final UserRepository userRepository;
    private final Day_of_week dayOfWeek;

    @Autowired
    PointController(PointRepository pointRepository, UserRepository userRepository, Day_of_week dayOfWeek) {
        this.pointRepository = pointRepository;
        this.userRepository = userRepository;
        this.dayOfWeek = dayOfWeek;
    }

    @CrossOrigin
    @GetMapping("/points")
    Collection<PointForClient> allPoints(Principal user) {
        System.out.println("all points request from " + user.getName());
        List<PointForClient> pointsForClient = new ArrayList<>();
        User currentUser = userRepository.findByUsername(user.getName());
        if (currentUser != null) {
            Collection<Point> points = pointRepository.findAllByUser(currentUser);
            Set<String> pointNames = new HashSet<>(); // Создаем множество для хранения уникальных имен точек
            for (Point p : points) {
                if (!pointNames.contains(p.getName())) { // Проверяем, не содержит ли множество уже такое имя точки
                    pointsForClient.add(new PointForClient(p.getName(), p.getFirstLevel(), p.getSecondLevel(), p.getThirdLevel(), p.getResult(), p.getUser()));
                    pointNames.add(p.getName()); // Добавляем имя точки в множество
                }
            }
        }
        return pointsForClient;
    }

    @CrossOrigin
    @PostMapping("/points")
    PointForClient newPoint(@RequestBody PointFromClient pointFromClient, Principal user) {
        User currentUser = userRepository.findByUsername(user.getName());
        Point existingPoint = pointRepository.findByUserAndName(currentUser, pointFromClient.getName());
        if (existingPoint != null) {
            // Update the existing point with new values
            existingPoint.setFirstLevel(pointFromClient.getFirstLevel());
            existingPoint.setSecondLevel(pointFromClient.getSecondLevel());
            existingPoint.setThirdLevel(pointFromClient.getThirdLevel());
            existingPoint.setResult(dayOfWeek.isDay(pointFromClient));
            Point updatedPoint = pointRepository.save(existingPoint);
            return new PointForClient(updatedPoint.getName(), updatedPoint.getFirstLevel(), updatedPoint.getSecondLevel(), updatedPoint.getThirdLevel(), updatedPoint.getResult(), updatedPoint.getUser());
        } else {
            Point newPoint = new Point();
            newPoint.setName(pointFromClient.getName());
            newPoint.setFirstLevel(pointFromClient.getFirstLevel());
            newPoint.setSecondLevel(pointFromClient.getSecondLevel());
            newPoint.setThirdLevel(pointFromClient.getThirdLevel());
            newPoint.setResult(dayOfWeek.isDay(pointFromClient));
            newPoint.setUser(currentUser);
            Point savedPoint = pointRepository.save(newPoint);
            return new PointForClient(savedPoint.getName(), savedPoint.getFirstLevel(), savedPoint.getSecondLevel(), savedPoint.getThirdLevel(), savedPoint.getResult(), savedPoint.getUser());
        }
    }
}
