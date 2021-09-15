import java.util.*;

public class Main {
  public static void main(String[] args) {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int lo = scn.nextInt();
    int hi = scn.nextInt();
    for (int i = lo; i <= hi; i++) {
        // prime no check code
       int count =0;
       for(int div=2;div*div<=i;div++){
           if(i%div == 0){
               count++;
           }
       }
       if(count == 0){
           System.out.println(i);
       }
       //---------------------------
      }
    }
  }