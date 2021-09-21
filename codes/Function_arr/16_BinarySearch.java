import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int []arr = new int [n];
    for(int i=0;i<arr.length;i++){
        arr[i]= scn.nextInt();
    }
    
    int d = scn.nextInt();
    int foundAt=-1;
    int left=0;
    int right=arr.length-1;
    while(left<=right){
        int mid = (left+right)/2;
        if(d>arr[mid]){
            left= mid+1;
        }else if(d<arr[mid]){
            right= mid-1;
        }else{
            foundAt=mid;
            break;
        }
    }
    System.out.println(foundAt);
 }
}