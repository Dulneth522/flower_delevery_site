package com.example.testdb.Controller;

import com.example.testdb.Dto.LoginDto;
import com.example.testdb.Entity.customer;
import com.example.testdb.Service.AuthService;
import com.example.testdb.Service.customerservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
@RestController
@RequestMapping("/api/customers")
public class customercontroller {

    private final customerservice customerservice;
    private final AuthService authService;

    @Autowired
    public customercontroller(customerservice customerservice, AuthService authService) {
        this.customerservice = customerservice;
        this.authService = authService;
    }

    // 🟢 SIGNUP
    @PostMapping("/signup")
    public customer signup(@RequestBody customer customer) {
        return customerservice.savecustomer(customer);
    }

    // 🟢 LOGIN (Using LoginDto for better security)
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginRequest) {

        // AuthService එකේ තියෙන login logic එක call කරනවා
        boolean isAuthenticated = authService.login(loginRequest);

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
    }
}