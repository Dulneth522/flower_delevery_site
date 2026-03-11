package com.example.testdb.Controller;

import com.example.testdb.Entity.flowerentity;
import com.example.testdb.Repo.Flowerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flowers")
@CrossOrigin(origins = "http://localhost:5173")
public class FlowerController {

    @Autowired
    private Flowerrepo flowerRepo;

    @PostMapping("/add")
    public flowerentity addFlower(@RequestBody flowerentity flower) {
        return flowerRepo.save(flower);
    }

    @GetMapping("/all")
    public List<flowerentity> getAllFlowers() {
        return flowerRepo.findAll();
    }

    @GetMapping("/{id}")
    public flowerentity getFlowerById(@PathVariable Long id) {
        return flowerRepo.findById(id).orElse(null);
    }

    @PutMapping("/update/{id}")
    public flowerentity updateFlower(@PathVariable Long id, @RequestBody flowerentity flowerDetails) {
        return flowerRepo.findById(id).map(flower -> {
            flower.setName(flowerDetails.getName());
            flower.setDescription(flowerDetails.getDescription());
            flower.setPrice(flowerDetails.getPrice());
            flower.setUrl(flowerDetails.getUrl());
            return flowerRepo.save(flower);
        }).orElse(null);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteFlower(@PathVariable Long id) {
        flowerRepo.deleteById(id);
        return "Flower Deleted!";
    }
}