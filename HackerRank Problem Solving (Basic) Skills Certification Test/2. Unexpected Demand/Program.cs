using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;



class Result
{

    /*
     * Complete the 'filledOrders' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY order
     *  2. INTEGER k
     */

    public static int filledOrders(List<int> order, int k)
    {
        int result = 0;

        order = order
            .OrderBy(x => x)
            .ToList();

        for (int i = 0; i < order.Count; i++)
        {
            if (k >= order[i])
            {
                result++;
                k -= order[i];
            }
        }

        return result;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int orderCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> order = new List<int>();

        for (int i = 0; i < orderCount; i++)
        {
            int orderItem = Convert.ToInt32(Console.ReadLine().Trim());
            order.Add(orderItem);
        }

        int k = Convert.ToInt32(Console.ReadLine().Trim());

        int result = Result.filledOrders(order, k);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
