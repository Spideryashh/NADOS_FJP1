import java.util.*;
    
    public class Main{
    
    public static void main(String[] args) {
      // write your code here  
      Scanner scn =  new Scanner(System.in);
      int n = scn.nextInt();
      
      int d=0;
      int temp = n;
      while(temp!=0){
          int q = temp/10;
          int r = temp%10;
          
          d++;
          temp=q;
      }
      int div = (int)Math.pow(10,d-1);
      
      while(div>=1){
          int q= n/div;
          int r=n%div;
          
          System.out.println(q);
          n=r;
          div=div/10;
      }
     }
    }