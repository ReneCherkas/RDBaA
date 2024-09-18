package com.rdbaa.repositories;

import com.rdbaa.model.data.Point;
import com.rdbaa.model.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;


public interface PointRepository extends JpaRepository<Point, Long> {
    @Query("SELECT u FROM Point u WHERE u.user = ?1 ORDER BY u.id DESC")
    Collection<Point> findAllByUser(User user);
    Point findByUserAndName(User user, String name);
}
