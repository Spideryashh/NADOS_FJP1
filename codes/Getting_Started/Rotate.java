import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int k = scn.nextInt();
   
    // digits count
    int d=0;
    int temp=n;
    while(temp!=0){
        int q=temp/10;
        d++;
        temp=q;
    }
    
    // handling negative k
    k=k%d;
    if(k<0){
        k=k+d;
    }
    
    //divisor setup
    int div= (int)Math.pow(10,k);
    
    //code
    int q=n/div;
    int r=n%div;
    
    int ans=r*(int)Math.pow(10,d-k) + q;
    System.out.println(ans);
  }
}