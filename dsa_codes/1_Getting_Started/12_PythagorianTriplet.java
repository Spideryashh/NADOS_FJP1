import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
    // write your code here  
    Scanner scn = new Scanner(System.in);
    int a = scn.nextInt();
    int b = scn.nextInt();
    int c = scn.nextInt();
    
    int max=a;
    if(b>=max){
        max=b;
    }
    if(c>=max){
        max=c;
    }
    
    if(max==a){
        boolean ans = a*a == (b*b) + (c*c);
        System.out.println(ans);
    }
    else if(max==b){
        boolean ans = b*b == (a*a) + (c*c);
        System.out.println(ans);
    }
    else{
        boolean ans = c*c == (a*a) + (b*b);
        System.out.println(ans);
    }
   }
  }