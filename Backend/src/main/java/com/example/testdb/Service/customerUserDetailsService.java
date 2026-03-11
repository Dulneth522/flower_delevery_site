package com.example.testdb.Service;

import com.example.testdb.Entity.customer;
import com.example.testdb.Repo.customerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class customerUserDetailsService implements UserDetailsService {

    @Autowired
    private customerrepo repo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        customer user = repo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        String roleName = user.getRole().replace("ROLE_", "");

        return User.withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(roleName)
                .build();
    }
}