import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    //part 1 arr input
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int []arr = new int [n];
    for(int i=0;i<arr.length;i++){
        arr[i]=scn.nextInt();
    }
    //part 2 find max
    int max = arr[0];
    for(int i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    
    //part 3 shape
    for(int ht=max;ht>=1;ht--){
        for(int i=0;i<arr.length;i++){
            if(arr[i]>=ht){
                System.out.print("*\t");
            }else{
                System.out.print("\t");
            }
        }
        System.out.println();
    }
 }

}