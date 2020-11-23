package com.example.projeto;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_activity);

        Button btLogin = findViewById(R.id.btLogin);

        btLogin.setOnClickListener(v -> {
            Intent intent = new Intent(this,mainScreenActivity.class);
            startActivity(intent);
        });
    }

    public void onbtLoginOnClick(View view) {

    }
}