package com.pp.stpoint.service;

import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author André Santos
 */
public interface FileService {
    String write(String baseFolder, MultipartFile multipartFile);
    String write(String baseFolder, String fileName, MultipartFile multipartFile);
    String update(String url, String baseFolder, MultipartFile multipartFile);
    String update(String url, String baseFolder, String fileName, MultipartFile multipartFile);
    boolean delete(String url);
}
