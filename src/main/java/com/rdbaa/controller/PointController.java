package com.rdbaa.controller;

import com.rdbaa.model.PointForClient;
import com.rdbaa.model.PointFromClient;
import com.rdbaa.model.entity.User;
import com.rdbaa.repositories.PointRepository;
import com.rdbaa.repositories.UserRepository;
import com.rdbaa.service.DayOfWeekService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class PointController {
    private final PointRepository pointRepository;
    private final UserRepository userRepository;
//    private final Day_of_week dayOfWeek;
    private final DayOfWeekService dayOfWeekService;


    @Autowired
    PointController(PointRepository pointRepository, UserRepository userRepository, DayOfWeekService dayOfWeekService) {
        this.pointRepository = pointRepository;
        this.userRepository = userRepository;
        this.dayOfWeekService = dayOfWeekService;
//        this.dayOfWeek = dayOfWeek;
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
            existingPoint.setResult(dayOfWeekService.isDay(pointFromClient.getName()));
            Point updatedPoint = pointRepository.save(existingPoint);
            return new PointForClient(updatedPoint.getName(), updatedPoint.getFirstLevel(), updatedPoint.getSecondLevel(), updatedPoint.getThirdLevel(), updatedPoint.getResult(), updatedPoint.getUser());
        } else {
            Point newPoint = new Point();
            newPoint.setName(pointFromClient.getName());
            newPoint.setFirstLevel(pointFromClient.getFirstLevel());
            newPoint.setSecondLevel(pointFromClient.getSecondLevel());
            newPoint.setThirdLevel(pointFromClient.getThirdLevel());
            newPoint.setResult(dayOfWeekService.isDay(pointFromClient.getName()));
            newPoint.setUser(currentUser);
            Point savedPoint = pointRepository.save(newPoint);
            return new PointForClient(savedPoint.getName(), savedPoint.getFirstLevel(), savedPoint.getSecondLevel(), savedPoint.getThirdLevel(), savedPoint.getResult(), savedPoint.getUser());
        }
    }
}
