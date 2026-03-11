package com.example.testdb.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Flowers")
@Entity
public class flowerentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flower_id")
    private Long id;

    @Column(name = "flower_name")
    private String name;

    @Column(name = "flower_description")
    private String description;

    @Column(name = "flower_price")
    private Double price;

    @Column(name = "flower_url" , length = 1000, columnDefinition = "Text")
    private String url;

}
