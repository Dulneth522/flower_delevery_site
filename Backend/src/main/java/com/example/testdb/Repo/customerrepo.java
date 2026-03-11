package com.example.testdb.Repo;

import com.example.testdb.Entity.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface customerrepo extends JpaRepository<customer, Long> {
    Optional<customer> findByEmail(String email);
}