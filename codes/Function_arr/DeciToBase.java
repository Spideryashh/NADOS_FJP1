import java.util.*;
  
  public class Main{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int b = scn.nextInt();
      int dn = getValueInBase(n, b);
      System.out.println(dn);
   }
  
   public static int getValueInBase(int n, int b){
       // write code here
       int dn = 0;              // initialized ans value to zero just like let take x=0 so that it can be updated
       int tp = 1; //10^0       to write ans in proper format of places
       
       while(n!=0){             
           int rem = n % b;     // ans wale base -> divide
           n = n / b;
           
           dn = dn + rem * tp;  
           tp = tp * 10;        // given base -> multiply to increase place value
       }
       return dn;
   }
  }