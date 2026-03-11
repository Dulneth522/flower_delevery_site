package com.example.testdb.Service;

import com.example.testdb.Dto.LoginDto;
import com.example.testdb.Entity.customer;
import com.example.testdb.Repo.customerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private customerrepo customerrepo;

    public Boolean login(LoginDto request) {

        Optional<customer> customerOptional = customerrepo.findByEmail(request.getEmail());

        if (customerOptional.isPresent()) {
            customer user = customerOptional.get();
            return user.getPassword().equals(request.getPassword());
        }
        return false;
    }
}