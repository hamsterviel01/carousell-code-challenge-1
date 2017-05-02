package com.hamsterviel01.www.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity to store content of post which requests to be created. This content
 * need to be stored in request's body instead of request parameter because it
 * can container special characters likes ' '.
 *
 * @author DrHamsterviel
 *
 */
@Getter
@Setter
@AllArgsConstructor
public class CreateNewPostEntity {
	/**
	 * Content of new post. Cannot exceeds 255 chars nor has zero char. This validation has been done on front end.
	 */
	private String content;
}