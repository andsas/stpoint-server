/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.pp.stpoint.service;

import com.pp.stpoint.entity.Article;

import java.util.Collection;

/**
 *
 * @author André Santos
 */
public interface ArticleService {
    Article save(Article article);
    Article update(Article article, Long id);
    void remove(Long id);
    Article find(Long id);
    Collection<Article> all();
    Collection<Article> bySituation(Long situationId);
    //Collection<Article> forUser(Long situationId, List<String> languages, List<String> desiredLanguages);
    //Collection<Article> forUser(Long situationId, String languages, String desiredLanguages);
}
