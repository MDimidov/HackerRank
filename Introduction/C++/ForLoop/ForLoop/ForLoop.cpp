// ForLoop.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <map>

using namespace std;

int main()
{
    int a, b;

    cin >> a >> b;

    map<int, string> nums = {
        {1, "one"},
        {2, "two"},
        {3, "three"},
        {4, "four"},
        {5, "five"},
        {6, "six"},
        {7, "seven"},
        {8, "eight"},
        {9, "nine"},
    };

    for (int i = a; i <= b; i++) {
        if (nums.count(i)) {
            cout << nums.at(i);
        }
        else if (i % 2 == 0) {
            cout << "even";
        }
        else {
            cout << "odd";
        }

        cout << endl;
    }
}