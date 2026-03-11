package com.example.testdb.Repo;

import com.example.testdb.Entity.flowerentity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Flowerrepo extends JpaRepository<flowerentity, Long> {
}
