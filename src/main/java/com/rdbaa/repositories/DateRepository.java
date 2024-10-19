package com.rdbaa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface DateRepository extends JpaRepository<Date, Long> {}

