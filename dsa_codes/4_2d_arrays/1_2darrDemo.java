// link : https://nados.pepcoding.com/content/986574de-de28-4d20-9b95-c8b764ce1d05/3fe9a7e4-bb2a-4fc5-9905-fae83e2f2d65/

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int m = scn.nextInt();
    int [][]arr = new int [n][m];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            arr[i][j] = scn.nextInt();
        }
    }
    for(int i=0 ; i<arr.length ; i++){
        for(int j=0 ; j<arr[0].length; j++){
            System.out.print(arr[i][j]+" ");
        }
        System.out.println();
    }
 }

}