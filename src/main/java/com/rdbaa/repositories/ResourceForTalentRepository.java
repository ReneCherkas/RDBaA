package com.rdbaa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceForTalentRepository extends JpaRepository<ResourceForTalent, Long> {
}
