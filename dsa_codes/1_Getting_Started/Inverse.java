import java.util.*;

public class Inverse{

public static void main(String[] args) {
  // write your code here  
  Scanner scn = new Scanner(System.in);
  int n= scn.nextInt();
  int pos = 1;
  int inv=0;
  while(n!=0){
    int q=n/10;
    int r=n%10;
    inv=inv+pos*(int)Math.pow(10,r-1);
    
    n=q;
    pos++;
  }
  System.out.print(inv);
 }
}