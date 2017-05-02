package com.hamsterviel01.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hamsterviel01.www.dao.PostDao;
import com.hamsterviel01.www.entity.PostEntity;

@Service
public class PostService {
	@Autowired
	PostDao postDao;
	
	public List<PostEntity> createNewPostService(String content) {
		PostEntity post = new PostEntity(content);
		return postDao.createNewPost(post);
	}
	
	public List<PostEntity> upvoteService(String id) {
		return postDao.upvote(id);
	}
	
	public List<PostEntity> downvoteService(String id) {
		return postDao.downvote(id);
	}
	
	public List<PostEntity> returnTop20Posts() {
		return postDao.returnTop20Posts();
	}
}
