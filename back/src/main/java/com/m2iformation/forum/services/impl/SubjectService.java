package com.m2iformation.forum.services.impl;

import com.m2iformation.forum.models.Subject;
import com.m2iformation.forum.repositories.SubjectRepository;
import com.m2iformation.forum.services.GenericService;
import org.modelmapper.ModelMapper;

import java.util.List;

public class SubjectService implements GenericService<Subject> {

    private SubjectRepository repo;

    public SubjectService(SubjectRepository repo, ModelMapper modelMapper) {
        this.repo = repo;
    }

    @Override
    public List<Subject> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Subject findById(String id) {
        return this.repo.findById(id).get();
    }

    @Override
    public Subject create(Subject entity) {
        return this.repo.save(entity);
    }

    @Override
    public Subject update(Subject entity) {
        return this.repo.save(entity);
    }

    @Override
    public void deleteById(String id) {
        this.repo.deleteById(id);
    }

    public void like(String id) {
        Subject sujet = this.repo.findById(id).get();
        sujet.like();
        this.repo.save(sujet);
    }

    public void unlike(String id){
        Subject sujet = this.repo.findById(id).get();
        sujet.unlike();
        this.repo.save(sujet);
    }
}
