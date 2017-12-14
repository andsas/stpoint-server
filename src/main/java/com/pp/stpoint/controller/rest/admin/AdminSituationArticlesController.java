package com.pp.stpoint.controller.rest.admin;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pp.stpoint.entity.Article;
import com.pp.stpoint.entity.Situation;
import com.pp.stpoint.service.ArticleService;
import com.pp.stpoint.service.SituationService;
import java.util.Collection;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author André Santos
 */
@RestController
@RequestMapping(value="/rest/admin/situation")
public class AdminSituationArticlesController {
	
    @Autowired
    ArticleService articleService;
    
    @Autowired
    SituationService situationService;
    
    
    @Autowired
    ModelMapper modelMapper;
    
    ObjectMapper mapper = new ObjectMapper();
    
    @RequestMapping(value="/{id}/articles/", method = RequestMethod.GET)
    public ResponseEntity<Collection<Article>> all(
            @PathVariable("id") Long id){
        
        return new ResponseEntity<>( articleService.bySituation(id), HttpStatus.OK);
    }
    
    @RequestMapping(value="/{id}/articles/", method = RequestMethod.POST)
    public ResponseEntity<Collection<Article>> save(
            @PathVariable("id") Long id,
            @RequestBody Article article){
    	
    	Situation situation = situationService.find(id);
        article.setSituation(situation);
        articleService.save(article);
        return all(id);
    }
    
    @RequestMapping(value="/{id}/articles/{articleId}", method = RequestMethod.DELETE)
    public ResponseEntity<Collection<Article>> remove(
            @PathVariable("id") Long id,
            @PathVariable("articleId") Long articleId){
        
        articleService.remove(articleId);
        return all(id);
    }
    @RequestMapping(value="/{id}/article/{articleId}", method = RequestMethod.GET)
    public ResponseEntity<Article> find(
            @PathVariable("id") Long id,
            @PathVariable("articleId") Long articleId){
        
        return new ResponseEntity<>( articleService.find(articleId), HttpStatus.OK);
    }
    
}
