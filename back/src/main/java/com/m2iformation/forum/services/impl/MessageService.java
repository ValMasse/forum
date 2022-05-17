package com.m2iformation.forum.services.impl;

import com.m2iformation.forum.models.Message;
import com.m2iformation.forum.models.Subject;
import com.m2iformation.forum.repositories.MessageRepository;
import com.m2iformation.forum.services.GenericService;
import org.modelmapper.ModelMapper;

import java.util.List;

public class MessageService implements GenericService<Message> {

    private MessageRepository repo;

    public MessageService(MessageRepository repo, ModelMapper modelMapper) {
        this.repo = repo;
    }

    @Override
    public List<Message> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Message findById(String id) {
        return this.repo.findById(id).get();
    }

    @Override
    public Message create(Message entity) {
        return this.repo.save(entity);
    }

    @Override
    public Message update(Message entity) {
        return this.repo.save(entity);
    }

    @Override
    public void deleteById(String id) {
        this.repo.deleteById(id);
    }

    public void like(String id) {
        Message message = this.repo.findById(id).get();
        message.like();
        this.repo.save(message);
    }

    public void unlike(String id){
        Message message = this.repo.findById(id).get();
        message.unlike();
        this.repo.save(message);
    }
}
