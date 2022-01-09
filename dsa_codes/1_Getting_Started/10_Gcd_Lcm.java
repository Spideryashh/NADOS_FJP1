import java.util.*;
    
    public class Main{
    
    public static void main(String[] args) {
      // write your code here  
      Scanner scn = new Scanner(System.in);
      int num1 = scn.nextInt();
      int num2 = scn.nextInt();
      
      int tnum1= num1;
      int tnum2= num2;
      while(tnum1 % tnum2 != 0){
          int r = tnum1 % tnum2;
          tnum1=tnum2;
          tnum2=r;
      }
      int gcd = tnum2;
      int lcm = num1*num2 / gcd;
      
      System.out.println(gcd);
      System.out.println(lcm);
     }
    }