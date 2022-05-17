package com.m2iformation.forum.controllers;

import com.m2iformation.forum.models.Message;
import com.m2iformation.forum.models.Subject;
import com.m2iformation.forum.services.impl.MessageService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("messages")
public class MessageController {

    @Autowired
    private MessageService service;

    @GetMapping
    public List<Message> findAll(){
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Message findById(@PathVariable String id){
        return this.findById(id);
    }

    @PostMapping
    public Message create(@RequestBody Message entity) {

        return this.service.create(entity);
    }

    @PutMapping("{id}")
    public Message update(@RequestBody Message entity) {

        return this.service.update(entity);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {

        this.service.deleteById(id);
    }

    @GetMapping("{id}/like")
    public void likeMessage(@PathVariable String id){
        this.service.like(id);
    }

    @GetMapping("{id}/unlike")
    public void unlikeMessage(@PathVariable String id){
        this.service.unlike(id);
    }
}
