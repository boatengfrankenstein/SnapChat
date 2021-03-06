/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class LogoutController extends HttpServlet{
    protected void doLogout(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
    
    final HttpSession session = request.getSession(false);
    if (session != null){
        session.invalidate();
    }

    PrintWriter pw = response.getWriter();
    pw.println("log out");
    response.sendRedirect("index");
    }
    @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            doLogout(request, response);
        }
        
        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            doLogout(request, response);
        }
}
