package com.example.testdb.Service;

import com.example.testdb.Entity.customer;
import com.example.testdb.Repo.customerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class customerservice {
    private final customerrepo customerrepo;

    @Autowired
    public customerservice(customerrepo customerrepo){
        this.customerrepo = customerrepo;
    }
    public customer savecustomer(customer customer){
        return customerrepo.save(customer);
    }
}
