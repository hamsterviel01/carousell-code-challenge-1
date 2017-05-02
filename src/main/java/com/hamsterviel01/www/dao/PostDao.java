package com.hamsterviel01.www.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock;
import java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock;

import org.springframework.stereotype.Repository;

import com.hamsterviel01.www.entity.PostEntity;

@Repository
public class PostDao {
	/**
	 * Store all {@link PostEntity} in descending order according to its up vote
	 * count.
	 */
	private final ArrayList<PostEntity> listOfAllPosts = new ArrayList<PostEntity>();

	/**
	 * Concurrency lock for {@link #listOfAllPosts}.
	 */
	private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

	/**
	 * Add {@link PostEntity} object to {@link #listOfAllPosts} and sort array.
	 * 
	 * @param e
	 * @return List of 20 {@link PostEntity} instances with top upvote count.
	 */
	public List<PostEntity> createNewPost(PostEntity e) {
		WriteLock writeLock = lock.writeLock();
		try {
			writeLock.lock();
			listOfAllPosts.add(e);
			Collections.sort(listOfAllPosts);
		} finally {
			writeLock.unlock();
		}

		return returnTop20Posts();
	}

	/**
	 * This method looks for {@link PostEntity} item in {@link #listOfAllPosts}
	 * that has id as specified. Then it will increment the count of upvote and
	 * sort the list again if necessary.
	 * 
	 * @param id
	 * @return List of 20 {@link PostEntity} instances with top upvote count.
	 */
	public List<PostEntity> upvote(String id) {
		int index = findPostEntityById(id);
		int step = 1;
		WriteLock writeLock = lock.writeLock();
		try {
			writeLock.lock();
			PostEntity post = listOfAllPosts.get(index).upvotePost();
			listOfAllPosts.set(index, post);
			while (index - step >= 0 && post.getUpvote() > listOfAllPosts.get(index - step).getUpvote()) {
				step++;
			}
			swap(index, index - step + 1);
		} finally {
			writeLock.unlock();
		}	

		return returnTop20Posts();
	}

	/**
	 * This method looks for {@link PostEntity} item in {@link #listOfAllPosts}
	 * that has id as specified. Then it will increment the count of downvote.
	 * 
	 * @param id
	 * @return List of 20 {@link PostEntity} instances with top upvote count.
	 */
	public List<PostEntity> downvote(String id) {
		WriteLock writeLock = lock.writeLock();
		try {
			writeLock.lock();
			int index = findPostEntityById(id);
			PostEntity post = listOfAllPosts.get(index).downvotePost();
			listOfAllPosts.set(index, post);
		} finally {
			writeLock.unlock();
		}

		return returnTop20Posts();
	}

	/**
	 * This method will return list of cloned copies of top 20 posts with
	 * highest upvote count. Clone copies are return instead of references to
	 * {@link #listOfAllPosts}'s items to ensure thread-safe publication.
	 * 
	 * @return List of 20 {@link PostEntity} instances with top upvote count.
	 */
	public List<PostEntity> returnTop20Posts() {
		ReadLock readLock = lock.readLock();
		try {
			readLock.lock();
			if (listOfAllPosts.size() == 0) {
				return listOfAllPosts;
			}
			List<PostEntity> top20Posts = new ArrayList<PostEntity>();
			for (int i = 0; i < 20 && i < listOfAllPosts.size(); i++) {
				top20Posts.add(listOfAllPosts.get(i));
			}
			return top20Posts;
		} finally {
			readLock.unlock();
		}
	}

	private void swap(int i, int j) {
		if (i == j)
			return;
		PostEntity tmp = listOfAllPosts.get(i);
		listOfAllPosts.set(i, listOfAllPosts.get(j));
		listOfAllPosts.set(j, tmp);
	}

	private int findPostEntityById(String id) {
		for (int i = 0; i < listOfAllPosts.size(); i++) {
			if (listOfAllPosts.get(i).getId().equals(id)) {
				return i;
			}
		}
		throw new NullPointerException();
	}
}
