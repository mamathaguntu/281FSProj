package com.sjsu.Utility;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class utility {
	public static void displayText(InputStream input) throws IOException{
	        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
	        while (true) {
	            String line = reader.readLine();
	            if (line == null) break;
	            System.out.println("    " + line);
	        }
	  }
}
