package com.rdbaa.repositories;

import com.rdbaa.model.entity.GettingResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GettingResourceRepository extends JpaRepository<GettingResource, Long> {
}
