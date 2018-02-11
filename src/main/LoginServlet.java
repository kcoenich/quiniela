import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet(
        name = "LoginServlet",
        description = "Login Servlet",
        urlPatterns = {"/bin/login"}
)
public class LoginServlet extends HTTPServlet  {

    @Override
    protected void doGet( HttpServletRequest request, HttpServletResponse response) '
                        throws ServletException, IOException {

        String jsonObject = "{}";
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(jsonObject);
        out.flush();
    }

}