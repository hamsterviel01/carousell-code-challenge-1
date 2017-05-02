package com.hamsterviel01.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hamsterviel01.www.entity.CreateNewPostEntity;
import com.hamsterviel01.www.entity.PostEntity;
import com.hamsterviel01.www.service.PostService;

@RestController
@RequestMapping(value = "/postController")
public class PostController {
	@Autowired
	PostService postService;
	
	@RequestMapping(value = "/createNewPost", method = RequestMethod.POST)
	@ResponseBody
	public List<PostEntity> createNewPost(@RequestBody CreateNewPostEntity entity) {
		return postService.createNewPostService(entity.getContent());
	}
	
	@RequestMapping(value = "/upvote", method = RequestMethod.POST)
	@ResponseBody
	public List<PostEntity> upvote(@RequestParam String id) {
		return postService.upvoteService(id);
	}
	
	@RequestMapping(value = "/downvote", method = RequestMethod.POST)
	@ResponseBody
	public List<PostEntity> downvote(@RequestParam String id) {
		return postService.downvoteService(id);
	}
	
	@RequestMapping(value = "/returnTop20Posts", method = RequestMethod.GET)
	@ResponseBody
	public List<PostEntity> returnTop20Posts() {
		return postService.returnTop20Posts();
	}
}
