package com.m2iformation.forum.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subject {

    @Id
    private String id;
    private String title;
    private int like;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    @DBRef
    private List<Message> messages;

    public void like(){
        this.like = this.getLike()+1;
    }
    public void unlike(){
        this.like = this.getLike()-1;
    }

}
