// this code is not efficient ( change it with sir code to get it in O(n))

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[] a = new int[n];
    for(int i = 0; i < n; i++){
        a[i] = scn.nextInt();
    }

    HashMap<Integer, Integer> table = new HashMap<>();

    for(int i = 0; i < n; i++){
        table.put(a[i], 1);
    }

    for(int i = 0; i < n; i++){
        if(table.containsKey(a[i]-1)){
            table.put(a[i], 0);
        }
    }

    int lseq = 0;
    int firstElement = 0;

    for(int i = 0; i < n; i++){
        if(table.get(a[i]) == 1){
            int sseq = 0;
            while(table.containsKey(a[i] + sseq)){
                sseq++;
            }
            if(lseq<sseq){
                lseq = sseq;
                firstElement = a[i];
            }
        }
    }

    for(int i = 0; i<lseq; i++){
        System.out.println(firstElement + i);
    }
 }

}