#include <iostream>
#include <cstdio>
#include<iomanip>
using namespace std;

int main() {
    // Complete the code.
    int a; long b; char c; float d; double e;
    
    cin>>a>>b>>c>>d>>e;
    
    cout<<a<<endl<<b<<endl<<c<<endl;
    // The 'setprecision()' method needs '#include<iomanip>'
    cout<<fixed<<setprecision(3)<<d<<endl;
    cout<<fixed<<setprecision(9)<<e<<endl;
    return 0;
}
