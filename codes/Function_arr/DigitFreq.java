import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int d = scn.nextInt();
        int f = getDigitFrequency(n, d);
        System.out.println(f);
    }

    public static int getDigitFrequency(int n, int d) {
        // write code here
        int f=0;
        while(n!=0){       // if n becomes zero it means we have iterated all the digits 
            int r=n%10;     // gets last digit of n
            n=n/10;         // update n after counting last digit  or we can also say that n becomes quotient 
            if(r==d){       // if rem = dig then it will increase the count of digit freq
            f++;
        }
        }
        return f;   // returns the freq of digit to main so it can be printed
    }
}