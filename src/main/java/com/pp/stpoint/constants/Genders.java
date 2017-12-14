package com.pp.stpoint.constants;

/**
 *
 * @author André Santos
 */
public enum Genders {
    MALE("MALE"),
    FEMALE("FEMALE");
    
    public String gender;
    
    private Genders(String gender){
        this.gender = gender;
    }
    
    public static Genders get(String gender){
        for(Genders g : Genders.values()){
            if(g.gender.equals(gender)){
                return g;
            }
        }
        return null;
    } 
    
    @Override
    public String toString(){
    	return gender;
    }
}
