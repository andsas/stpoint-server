package com.pp.stpoint.repository;

import com.pp.stpoint.entity.Article;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author André Santos
 */
public interface ArticleRepository extends JpaRepository<Article, Long>{
	
    List<Article> findBySituationId(Long id);
    
    /*
    //Procura a expressão de determinada situação passada
    //e que tenha Values cuja linguagem esteja presente nas coleções passadas
    @Query(
    		"   SELECT e "
    		+ " FROM "
    		+ "	Article as e "
    		+ " 	join e.values as d "//Display d
    		+ " WHERE "
    		+ " 	e.situation.id = :id AND "
    		//+ " 	d.ARTICLE_ID = e.id AND "
    		+ " 	( "
    		+ "		d.language in :languages OR "//d.language 
    		+ " 		d.language in :desiredLanguages "
    		+ "		) "
    		+ " GROUP BY e.id")
    List<Article> findBySituationAndLanguage(
    		@Param("id") Long id,
    		@Param("languages") List<String> languages,
    		@Param("desiredLanguages") List<String> desiredLanguages);
    		*/
    
}
