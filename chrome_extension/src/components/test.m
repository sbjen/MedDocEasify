
a = 1;
b = 1;


L = 1;
N = 1024;
x_lin = linspace(-L, L, N);
y_lin = linspace(-L, L, N);
[x, y] = meshgrid(x_lin, y_lin);



A1 = 10*(x.^2 + y.^2).^2 + 10* y.*(x.^2 + y.^2); 
A2 = 10*(x.^2 + y.^2).^2 + 10*(x.^2 + y.^2);
A3 = 10*(x.^2 + y.^2).^2 +10*(x.^2 - y.^2) ;



interferograms = zeros(size(x,1), size(x,2), 3);
interferograms(:,:,1) = a + b * cos( A1);
interferograms(:,:,2) = a + b * cos(A2);
interferograms(:,:,3) = a + b * cos( A3);


for i = 1:3
    % Display 
figure;
imagesc(x_lin, y_lin, interferograms(:,:,i));
colormap('gray');
colorbar;
title(['Interferogram  ', num2str(i)]);
xlabel('X-axis');
ylabel('Y-axis');
end


delta = pi/8;

% Simulating all 3 abbreviation
I = zeros([size(x), 5, 3]);
for k = 1:3
    aberration = eval(['aberration_', num2str(k)]);
    for n = 1:5
        I(:,:,n,k) = a + b * cos(aberration + (n-1)*delta);
    end
end

% ==============  using Hariharan's method =========================
phi = zeros([size(x), 3]);
for k = 1:3
    I1 = I(:,:,1,k);
    I2 = I(:,:,2,k);
    I3 = I(:,:,3,k);
    I4 = I(:,:,4,k);
    I5 = I(:,:,5,k);
    
    phi(:,:,k) = -atan2(2*sin(delta) *(I4 - I2) , I1-2*I3-I5);
end

% Display 
for i = 1:3
    figure;
    imagesc(x_lin, y_lin, phi(:,:,i));
    colormap('gray');  % Use a colormap that provides more contrast for phase
    colorbar;
    title(['Hariharan Extracted Phase  ', num2str(i)]);
    xlabel('X-axis');
    ylabel('Y-axis');
end