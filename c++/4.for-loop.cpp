#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int a,b;
    string num_letters[10] = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    cin>>a>>b;
    for (int i=a; i <= b; i++) {
        if (i > 9) {
            i % 2 == 0 
                ? cout<<"even"<<endl
                : cout<<"odd"<<endl;
        } else {
            cout<<num_letters[i-1]<<endl;
        }
        
    }
    return 0;
}
