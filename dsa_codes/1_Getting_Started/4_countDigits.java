import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
    // write your code here  
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int d = 0;
    while(n!=0){
        int quo = n/10;
        n=quo;
        d++;
    }
    System.out.println(d);
   }
  }