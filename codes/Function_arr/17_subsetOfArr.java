import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int []arr = new int[n];
    for(int i=0;i<arr.length;i++){
        arr[i]=scn.nextInt();
    }
    
    int lim = (1<<n); // 2^n
    for(int i=0;i<lim;i++){
        int dec = i;
        
        //binary of the decimal and if rem is 0 then don't print else print
        String str = " "; //string input
        for(int j=0;j<arr.length;j++){
            int rem= dec%2;
            dec = dec/2;
            
            if(rem == 0){
                str = "-\t"+str; //storing ans in string and printing the value to starting of the ans because rem gives last place of ans
            }else{
                str = arr[arr.length - 1 - j]+"\t"+ str;
            }
        }
        System.out.println(str);
    }
 }

}