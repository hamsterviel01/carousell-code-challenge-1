package com.hamsterviel01.www.entity;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * An immutable class to store data of one single post. This class was made
 * immutable for thread-safe reasons.
 * 
 * @author DrHamsterviel
 *
 */
@Getter
@AllArgsConstructor
public class PostEntity implements Comparable<PostEntity> {
	private final String id;
	private final String content;

	/**
	 * Total count of upvotes.
	 */
	private final int upvote;

	/**
	 * Total count of downvotes
	 */
	private final int downvote;

	public PostEntity(String content) {
		id = UUID.randomUUID().toString();
		this.content = content;
		upvote = 0;
		downvote = 0;
	}

	/**
	 * Increment {@link #upvote}.
	 * 
	 * @return new {@link PostEntity} instance with increment value of
	 *         {@link #upvote}.
	 */
	public PostEntity upvotePost() {
		int newUpvote = this.upvote + 1;
		return new PostEntity(id, content, newUpvote, downvote);
	}

	/**
	 * Increment {@link #downvote}
	 * 
	 * @return new {@link PostEntity} instance with increment value of
	 *         {@link #downvote}.
	 */
	public PostEntity downvotePost() {
		int newDownvote = this.downvote + 1;
		return new PostEntity(id, content, upvote, newDownvote);
	}

	@Override
	public int compareTo(PostEntity o) {
		// Sort in descending order
		return o.getUpvote() - this.upvote;
	}
}
