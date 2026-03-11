package com.example.testdb.Service;

import com.example.testdb.Entity.flowerentity;
import com.example.testdb.Repo.Flowerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlowerService {
    @Autowired
    private Flowerrepo flowerrepo;

    public List<flowerentity> getAllFlowers(){
        return flowerrepo.findAll();
    }

    public flowerentity saveflower(flowerentity flower){
        return flowerrepo.save(flower);
    }
}
