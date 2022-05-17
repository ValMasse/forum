package com.m2iformation.forum.controllers;

import com.m2iformation.forum.models.Subject;
import com.m2iformation.forum.services.impl.SubjectService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("sujets")
public class SubjectController {

    @Autowired
    private SubjectService service;

    @GetMapping
    public List<Subject> findAll(){

        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Subject findById(@PathVariable String id){
        return this.service.findById(id);
    }

    @PostMapping
    public Subject create(@RequestBody Subject entity) {

        return this.service.create(entity);
    }

    @PutMapping("{id}")
    public Subject update(@RequestBody Subject entity) {

        return this.service.update(entity);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {

        this.service.deleteById(id);
    }

    @GetMapping("{id}/like")
    public void likeSujet(@PathVariable String id){
        this.service.like(id);
    }

    @GetMapping("{id}/unlike")
    public void unlikeSujet(@PathVariable String id){
        this.service.unlike(id);
    }
}
