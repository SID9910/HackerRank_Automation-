module.exports = {
   answers :[
`#include <bits/stdc++.h>
using namespace std;

int main(){
    int number_of_elements;
    cin >> number_of_elements;
    vector <int> array(number_of_elements);
    int sum_of_array = 0;
    
    for(int i = 0; i < number_of_elements; i++){
       cin >> array[i];
       sum_of_array += array[i];
    }
    
    cout << sum_of_array;
    return 0;
}
`
,
`import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {


   
 public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a;
        a = in.nextInt();
        int b;
        b = in.nextInt();
        int sum;
        sum = a+b;
        System.out.println(sum);
   }
}
`




    ]
}