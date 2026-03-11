package com.example.testdb.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "loginsys")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "fname", nullable = false)
    private String fname;

    @Column(name = "lname", nullable = false)
    private String lname;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role", nullable = false)
    private String role;
}
